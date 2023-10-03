import MalgaCheckoutFull from "@malga-checkout-full/react";

function Checkout() {
  return (
    <div>
      <MalgaCheckoutFull
        sandbox
        publicKey="de562cda-fcc0-47ae-b0e9-66b35ccdea4f"
        clientId="25c006a5-fc46-488c-942f-845b3488d032"
        merchantId="12dc45f7-1aff-4719-8b4e-296e9195412f"
        paymentMethods={{
          pix: {
            expiresIn: 600,
          },
          credit: {
            installments: {
              quantity: 1,
              show: true,
            },
            showCreditCard: true,
            checkedSaveCard: false,
          }, 
          boleto: {
            expiresDate: "2022-12-31",
            instructions: "Instruções para pagamento do boleto",
            interest: {
              days: 1,
              amount: 100,
            },
            fine: {
              days: 2,
              amount: 200,
            },
          },
          drip: {
            browser: {
              ipAddress: "127.0.0.1",
              browserFingerprint: "123123123",
            },
            successRedirectUrl: "https://example.com",
            cancelRedirectUrl: "https://example.com",
          },
          nupay: {
            taxValue: 10,
            delayToAutoCancel: 60,
            orderUrl: "http://127.0.0.1",
          },
        }}
        pageConfig={{
          brandUrl: "https://exampleurl/images/logo.png",
          footerDescription: "Todos os direitos reservados © 2022 Malga.",
          backRoute: "https://www.malga.io/",
          delivery: 0,
          products: [
            {
              name: "Produto 1",
              quantity: 2,
              amount: 50,
              description: "Descrição do produto 1",
              sku: "123",
              risk: "Low",
            },
            {
              name: "Produto 2'",
              quantity: 2,
              amount: 40,
              description: "Descrição do produto 2",
              sku: "124",
              risk: "Low",
            },
          ],
        }}
        transactionConfig={{
          statementDescriptor: "#1 Demonstration Malga Checkout",
          amount: 100,
          description: "",
          orderId: "",
          customerId: "",
          currency: "BRL",
          capture: false,
        }}
        dialogConfig={{
          show: true,
          actionButtonLabel: "Continuar",
          errorActionButtonLabel: "Tentar novamente",
          successActionButtonLabel: "Continuar",
          successRedirectUrl: "https://www.malga.io/",
        }}
        onTransactionSuccess={(data) => {
          // Your specifications here
        }}
        onTransactionFailed={(error) => {
          // Your specifications here
        }}
      />
    </div>
  );
}

export default Checkout;
