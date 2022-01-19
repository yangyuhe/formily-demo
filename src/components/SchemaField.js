import { createSchemaField } from '@formily/react'
import { FormItem } from '@formily/antd'
import Button from './Button'
import CustomInput from './CustomInput'
import { Input } from './Input'
import CuiProject from './ProjectSelect'

export default createSchemaField({
  components: { Button, CustomInput, FormItem, Input, CuiProject },
})
