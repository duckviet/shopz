```
shopz
│  ├─ src
│  │  ├─ app
│  │  │  ├─ Cart
│  │  │  │  └─ page.tsx
│  │  │  ├─ CustomerLogin
│  │  │  │  └─ page.tsx
│  │  │  ├─ Detail
│  │  │  │  └─ [id]
│  │  │  │     └─ page.tsx
│  │  │  ├─ favicon.ico
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ Profile
│  │  │  │  └─ page.tsx
│  │  │  ├─ SignUp
│  │  │  │  └─ page.tsx
│  │  │  ├─ StaffHome
│  │  │  │  └─ page.tsx
│  │  │  ├─ StaffLogin
│  │  │  │  └─ page.tsx
│  │  │  └─ Wishlist
│  │  │     └─ page.tsx
│  │  ├─ components
│  │  │  ├─ Comment.tsx
│  │  │  ├─ CommentsList.tsx
│  │  │  ├─ FilterBar.tsx
│  │  │  ├─ ItemCard.tsx
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ PaginationControl.tsx
│  │  │  ├─ ProfileCard.tsx
│  │  │  ├─ RecommendItem.tsx
│  │  │  ├─ RecommendList.tsx
│  │  │  └─ staff-components
│  │  │     └─ ProductTable.tsx
│  │  ├─ interfaces
│  │  │  ├─ Address.ts
│  │  │  ├─ Cart.ts
│  │  │  ├─ CartItem.ts
│  │  │  ├─ Category.ts
│  │  │  ├─ Comment.ts
│  │  │  ├─ Customer.ts
│  │  │  ├─ Order.ts
│  │  │  ├─ OrderItem.ts
│  │  │  ├─ Payment.ts
│  │  │  ├─ Permission.ts
│  │  │  ├─ Product.ts
│  │  │  ├─ Review.ts
│  │  │  ├─ Role.ts
│  │  │  ├─ Staff.ts
│  │  │  └─ Wishlist.ts
│  │  ├─ providers
│  │  │  ├─ CustomerProvider.tsx
│  │  │  ├─ NextAuthProvider.tsx
│  │  │  └─ ProductItemProvider.tsx
│  │  ├─ services
│  │  │  └─ axios
│  │  │     └─ endpoints
│  │  │        ├─ customer.endpoint.ts
│  │  │        └─ product.endpoint.ts
│  │  └─ utils
│  │     └─ apiRequest.ts
│  └─ tailwind.config.ts
│
└─ shopz-backend
   ├─ src
   │  ├─ controllers
   │  │  ├─ authentication.controller.ts
   │  │  ├─ base
   │  │  │  └─ base.controller.ts
   │  │  ├─ businesses.controller.ts
   │  │  ├─ categories.controller.ts
   │  │  ├─ customers.controller.ts
   │  │  ├─ interface
   │  │  │  ├─ i.base.controller.ts
   │  │  │  ├─ i.businesses.controller.ts
   │  │  │  ├─ i.customers.controller.ts
   │  │  │  ├─ i.order.controller.ts
   │  │  │  └─ i.products.controller.ts
   │  │  ├─ orders.controller.ts
   │  │  └─ products.controller.ts
   │  ├─ helpers
   │  │  └─ index.ts
   │  ├─ index.ts
   │  ├─ models
   │  │  ├─ businesses.model.ts
   │  │  ├─ category.model.ts
   │  │  ├─ customer.model.ts
   │  │  ├─ interfaces
   │  │  │  ├─ authentication.interface.ts
   │  │  │  ├─ businesses.interface.ts
   │  │  │  ├─ customer.interface.ts
   │  │  │  ├─ order.interface.ts
   │  │  │  └─ product.interface.ts
   │  │  ├─ order.model.ts
   │  │  └─ product.model.ts
   │  ├─ router
   │  │  ├─ authentication.route.ts
   │  │  ├─ businesses.route.ts
   │  │  ├─ categories.route.ts
   │  │  ├─ customers.route.ts
   │  │  ├─ index.ts
   │  │  ├─ orders.route.ts
   │  │  └─ products.route.ts
   │  └─ services
   │     ├─ base
   │     │  └─ base.service.ts
   │     ├─ businesses.service.ts
   │     ├─ customers.service.ts
   │     ├─ interface
   │     │  ├─ i.base.service.ts
   │     │  ├─ i.businesses.service.ts
   │     │  ├─ i.customers.service.ts
   │     │  ├─ i.orders.service.ts
   │     │  └─ i.products.service.ts
   │     ├─ orders.service.ts
   │     └─ products.service.ts
   └─ tsconfig.json

```
