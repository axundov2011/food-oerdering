import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center">
        <div className="min-h-[calc(100vh_-_433px)]">
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>EXTRAS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src="/images/f1.png" alt="" width={40} height={40} />
                  <span>Good Pizza</span>
                </td>
                <td>
                  <span>mayonez, aci, sos, ketçap</span>
                </td>
                <td>$20</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_433px)]">
          <Title>Total</Title>
          <div>
            <span>Subtotal:</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
