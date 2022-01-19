import { FormProvider } from '@formily/react'
import { createForm } from '@formily/core'
import { useEffect, useMemo } from 'react'
import SchemaField from '../../components/SchemaField'
import json from './index.json'

export default function ButtonDemo(props) {
  const form = useMemo(() => createForm(), [])
  return (
    <FormProvider form={form}>
      <SchemaField
        schema={json}
        scope={{
          click: () => {
            alert('click')
          },
        }}
      />
    </FormProvider>
  )
}
