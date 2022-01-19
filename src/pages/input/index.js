import { FormProvider, FormConsumer } from '@formily/react'
import { createForm, onFieldInit } from '@formily/core'
import { useEffect, useMemo } from 'react'
import SchemaField from '../../components/SchemaField'
import json from './index.json'

export default function ButtonDemo(props) {
  const form = useMemo(
    () =>
      createForm({
        effects() {
          onFieldInit('age', field => {
            field.setLoading(true)
          })
          onFieldInit('username', field => {
            field.setLoading(true)
          })
        },
      }),
    []
  )
  return (
    <FormProvider form={form}>
      <SchemaField schema={json} />
      <FormConsumer>{form => JSON.stringify(form.values)}</FormConsumer>
    </FormProvider>
  )
}
