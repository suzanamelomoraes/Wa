import React from 'react'

import { Icon, Button } from 'semantic-ui-react'

const MahiPopup = (props) => {
  const { title, category, hours, description, assignerName } = props.details

  return (
    <div>
      <h3>{title}</h3>
      <Button
        negative
        icon='close'
        size='mini'
        onClick={() => props.closePopup(null)}
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '0.75rem',
          padding: '0.25rem'
        }}
      />
      <p><Icon name='tag' size='small' /> <strong>Category:</strong> {category}</p>
      <p><Icon name='time' size='small' /> <strong>Hour/s:</strong> {hours}</p>
      <p><Icon name='male' size='small' /> <strong>Needed by:</strong> {assignerName}</p>
      <p>{description}</p>
    </div>
  )
}

export default MahiPopup;
