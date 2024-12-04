import { permission } from "./permissions";

export const routerNav = [
  {
    name: 'Mi Perfil',
    icon: 'person',
    router: '/dashboard',
    items: []
  },
  {
    name: 'Usuario',
    icon: 'groups',
    router: '',
    items: [
      {
        name: 'Usuarios',
        icon: 'settings_accessibility',
        router: '/dashboard/users',
        permission: [
          permission.get_user,
          permission.create_user,
          permission.reset_pass_user,
          permission.update_role_user
        ]
      },
      {
        name: 'Roles',
        icon: 'supervisor_account',
        router: '/dashboard/roles',
        permission: [
          permission.get_role,
          permission.create_role,
          permission.update_role,
          permission.delete_role
        ]
      }
    ]
  },
  {
    name: 'Producto',
    icon: 'shoppingmode',
    router: '',
    items: [
      {
        name: 'Categoria',
        icon: 'category',
        router: '/dashboard/category',
        permission: [
          permission.get_category,
          permission.create_category,
          permission.update_category,
          permission.delete_category
        ],
      },
      {
        name: 'Inventario',
        icon: 'inventory',
        router: '',
        permission: [],
        items: [
          {
            name: 'Entradas',
            icon: 'input',
            router: '/dashboard/inventory/input',
            permission: [
              permission.create_stock_in,
              permission.get_stock_in,
              permission.delete_stock_in
            ]
          },

          {
            name: 'Salidas',
            icon: 'output',
            router: '/dashboard/inventory/output',
            permission: [
              permission.create_stock_out,
              permission.get_stock_out,
              permission.delete_stock_out
            ]
          }
        ]
      },
      {
        name: 'Items',
        icon: 'checkroom',
        router: '/dashboard/items',
        permission: [
          permission.create_product,
          permission.edit_product,
          permission.get_product,
          permission.delete_product,
          permission.create_detail_product,
          permission.get_detail_product,
          permission.update_detail_product,
        ]
      }
    ]
  },
  {
    name: 'Venta',
    icon: 'attach_money',
    router: '',
    items: [
      {
        name: 'Ventas',
        icon: 'price_check',
        router: '/dashboard/sales',
        permission: [
          permission.create_order,
          permission.get_order,
          permission.delete_order
        ]
      },
      {
        name: 'Devoluciones',
        icon: 'currency_exchange',
        router: '/dashboard/return',
        permission: [
          permission.get_sale_return,
          permission.create_sale_return,
          permission.delete_sale_return
        ]
      }
    ]
  }
]
