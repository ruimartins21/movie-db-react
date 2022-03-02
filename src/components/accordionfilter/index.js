import React, { useRef, useState } from 'react';

import Checkbox from '../checkbox';
import {
  Title,
  Header,
  Content,
  ExpandedIcon,
  AccordionWrapper,
} from './styles';

const AccordionFilter = ({ title, options }) => {
  const [active, setActive] = useState('');
  const content = useRef(null);

  return (
    <AccordionWrapper>
      <Header className={`${active}`} onClick={() => setActive(!active)}>
        <ExpandedIcon active={active} />
        <Title>{title}</Title>
      </Header>
      <Content
        ref={content}
        style={
          active
            ? { maxHeight: content.current.scrollHeight }
            : { maxHeight: '0' }
        }
      >
        {options.map((opt) => (
          <Checkbox
            key={opt.id}
            id={opt.id}
            name={opt.name}
            label={opt.name}
            onChange={(e) => console.log(e)}
          />
        ))}
      </Content>
    </AccordionWrapper>
  );
}

export default AccordionFilter;
