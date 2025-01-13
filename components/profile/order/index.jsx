import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'
import Title from '@/components/ui/Title'

const Order = () => {
  return (
    <div className={styles.cartTable}>
      <Title>Password</Title>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>PASSWORD</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>63117...</td>
              <td>Baku</td>
              <td>10.10.2025</td>
              <td>$18</td>
              <td>pendign</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Order