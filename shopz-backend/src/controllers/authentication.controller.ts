import express from "express";
import { authentication, random } from "../helpers";
import { customerService } from "../services/customers.service";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const {
      email,
      password,
      username,
      gender,
      birthday,
      address: { street, city, country, detail },
    } = req.body;
    if (!email || !password || !username) {
      return res.sendStatus(400);
    }
    const existingCutomer = await customerService.getCustomerByEmail(email);
    if (existingCutomer) return res.sendStatus(400);

    const salt = random();
    const customer = await customerService.create({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
      gender,
      birthday,
      address: {
        street,
        city,
        country,
        detail,
      },
    });

    return res.status(200).json(customer).end();
  } catch (e) {
    console.log(e);
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(400);
    }

    const customer = await customerService.getCustomerByEmail(email);

    if (!customer) {
      return res.sendStatus(400);
    }

    const expectedHash = authentication(
      customer.authentication.salt,
      password
    ).toString();
    const customerPassword = customer.authentication.password.toString();
    console.log(req.body);
    if (customerPassword !== expectedHash) {
      return res.sendStatus(403).end();
    }

    const salt = random();
    customer.authentication.sessionToken = authentication(
      salt,
      customer._id.toString()
    ).toString();

    await customer.save();

    res.cookie("ANTONIO-AUTH", customer.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    });
    console.log("79", customer);
    return res.status(200).json(customer).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
