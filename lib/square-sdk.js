import { Client, Environment, ApiError } from "square";

const client = new Client({
  accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
  environment: Environment.Production,
});

export async function CreateUser(email){
  const res = await checkUserExistence(email)
  if (res){
    try {
        const response = await client.customersApi.createCustomer({
          emailAddress: email,
        });
        console.log(response.result);
      } catch(error) {
        console.log(error);
      }
    }
  return ''
}

export async function checkUserExistence(email){
  try {
    const response = await client.customersApi.searchCustomers({
      query: {
        filter: {
          emailAddress: {
            exact: email
          }
        }
      }
    });

    if (response.statusCode == 200 && Object.keys(JSON.parse(response.body)).length == 0){
        return true
    }
    return false
  } catch(error) {
    console.log(error);
  }
}

export async function getCustomerId(email){
  try {
    const response = await client.customersApi.searchCustomers({
      query: {
        filter: {
          emailAddress: {
            exact: email
          }
        }
      }
    });
    if (response.statusCode == 200 && Object.keys(JSON.parse(response.body)).length != 0){
        return JSON.parse(response.body).customers[0].id
    }
    return null
  } catch(error) {
    console.log(error);
  } 

}

export async function Checkout( items, customerEmail ) {
  const customerId = await getCustomerId(customerEmail)
  try {
    const response = await client.checkoutApi.createPaymentLink({
      order: {
        locationId: 'L4N2Z05YS3K0W',
        customerId: customerId,
        lineItems: items,
        pricingOptions: {
          autoApplyTaxes: true
        }
      },
      checkoutOptions: {
        allowTipping: true,
        merchantSupportEmail: 'bluemingfloral@gmail.com',
        askForShippingAddress: true,
        acceptedPaymentMethods: {
          applePay: true,
          googlePay: true
        }
      },
      prePopulatedData: {
        buyerEmail: customerEmail
      }
    });
    console.log(response.result.paymentLink.url)
    return String(response.result.paymentLink.url)
  } catch(error) {
    console.log(error);
  }
}

export async function SearchOrders(customerEmail){
  const customerId = await getCustomerId(customerEmail)
  console.log(customerId)
  try {
    const response = await client.ordersApi.searchOrders({
      locationIds: [
        'L4N2Z05YS3K0W'
      ],
      query: {
        filter: {
          customerFilter: {
            customerIds: [
              customerId
            ]
          }
        },
        sort: {
          sortField: 'UPDATED_AT',
          sortOrder: 'DESC'
        }
      },
      returnEntries: false
    });
   
    return response.result
  } catch(error) {
    console.log(error);
  }
}

export async function RetrieveOrder(orderId){
  try {
    const response = await client.ordersApi.retrieveOrder(orderId);
    console.log(response.result);
    return response.result
  } catch(error) {
    console.log(error);
  }
}