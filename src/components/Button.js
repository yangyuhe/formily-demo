import React from 'react'
import { Button } from 'antd'

export default function (props) {
  const { label, ...left } = props
  return <Button {...left}>{label}</Button>
}
