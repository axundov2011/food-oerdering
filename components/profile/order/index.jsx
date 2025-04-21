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
              <th>product</th>
              <th>customer</th>
              <th>total</th>
              <th>payment</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6107...</td>
              <td>Aykhan Akhundov</td>
              <td>$18</td>
              <td>cash</td>
              <td>paraparing</td>
              <td>
                <button className='btn-primary !bg-success'>Next Stage</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Order