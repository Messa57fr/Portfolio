export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "String",
      options: {
        maxLength: 40
      }
    },
    {
      name: "phone",
      title: "Phone",
      type: "String",
      options: {
        maxLength: 40
      }
    },
    {
      name: "address",
      title: "Address",
      type: "String",
      options: {
        maxLength: 40
      }
    },
    {
      name: "total",
      title: "Total",
      type: "Number"
    },
    {
      name: "status",
      title: "Status",
      type: "Number"
    }
  ]
}
