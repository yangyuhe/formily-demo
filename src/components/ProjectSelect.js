import { importModule, registerRemote } from '@mi/fusion-utils'
import { useState } from 'react'
import { Tooltip } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { useField } from '@formily/react'

registerRemote({
  name: 'cui',
  url: window.location.hostname.includes('cloud-staging.d.xiaomi.net')
    ? 'https://staging-cnbj2-fds.api.xiaomi.net/cloud-fe--cui/static/cui-staging-0.js'
    : 'https://cdn.cnbj1.fds.api.mi-img.com/cloud-fe--cui/static/cui-production-0.js',
})
const Project = importModule('cui/Project')
export default function CuiProject(props) {
  const [record, setRecord] = useState(null)
  const field = useField()
  const { mode = 'local', folderSelectable = true } = props
  return (
    <Project
      folderSelectable={folderSelectable}
      mode={mode}
      onChange={evt => {
        setRecord(evt)
        field.setValue(evt.path)
      }}
      content={() => {
        return [
          record?.name ? (
            <span key="set" style={{ cursor: 'pointer' }}>
              <Tooltip title={record.path}>{record.name}</Tooltip>
            </span>
          ) : (
            <span key="unset" style={{ cursor: 'pointer' }}>
              <span>请选择</span>
            </span>
          ),
          <CaretDownOutlined key="icon" />,
        ]
      }}
    />
  )
}
