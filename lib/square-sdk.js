import { Client, Environment, ApiError } from "square";

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

export async function CreateUser(email){
  if (!checkUserExistence(email)){
    try {
        const response = await client.customersApi.createCustomer({
          emailAddress: email,
        });
      
        console.log(response.result);
      } catch(error) {
        console.log(error);
      }
    }
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
    if (response.statusCode == 200){
        return true
    }
    return false
  } catch(error) {
    console.log(error);
  }
}

export async function Checkout() {
try {
    const response = await client.checkoutApi.createPaymentLink({
      idempotencyKey: '170b11d0-5e60-45b7-aa01-f5f06a845926',
      quickPay: {
        name: 'hi',
        priceMoney: {
          amount: 120,
          currency: 'CAD'
        },
        locationId: 'L865F3VHKEVRA'
      },
      checkoutOptions: {
        askForShippingAddress: true
      },
      prePopulatedData: {}
    });
  
    console.log(response.result);
  } catch(error) {
    console.log(error);
  }
  return response.url
}