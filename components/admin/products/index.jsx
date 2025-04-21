import Title from '@/components/ui/Title'
import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

const Poruducts = () => {
  return (
<div className={styles.cartTable}>
      <Title>Products</Title>
        <table>
          <thead>
            <tr>
              <th>image</th>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <Image src="/images/f1.png" alt='pizza' width={50} height={50} />
              </td>
              <td>63049e92...</td>
              <td>Good Pizza</td>
              <td>$18</td>
              <td>
                <button className='btn-primary !bg-danger'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>  )
}

export default Poruducts