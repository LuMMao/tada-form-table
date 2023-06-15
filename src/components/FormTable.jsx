import React from 'react'
import dayjs from 'dayjs'

export default () => {
  console.log(dayjs, 'dayjs');
  return <>
    <h1>FormTable</h1>
    <span>北京时间：{dayjs().format('YYYY-MM-DD HH:mm:ss')}</span>
  </>
}