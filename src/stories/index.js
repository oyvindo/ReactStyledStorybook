import React from 'react';
import { storiesOf, action, linkTo, configure, setAddon, addDecorator } from '@kadira/storybook';
import { withKnobs, text, boolean, object } from '@kadira/storybook-addon-knobs';
import Button from './Button';
import Pagination from '../Components/Pagination';
import TestComponent from '../Components/TestComponent';
import Welcome from './Welcome';
import OoCheckBox from '../Components/OoCheckBox';
import FontAwesome from 'react-fontawesome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

const ooCheckBoxStories = storiesOf('OoCheckbox', module)
    .add('normal', () => (
        <OoCheckBox
            title={ text('title', 'Fin tekst') }
            size={ text('size', '') }
            value={ boolean('value', 'true') }
            onChange={action('clicked')}
        />
    ))
    .add('small', () => (
        <OoCheckBox
            title="Fin tekst"
            size={ text('size', 'small') }
            value="true"
            onChange={action('clicked')}
        />
    ));

ooCheckBoxStories.addDecorator(withKnobs);
storiesOf('Pagination', module)
    .add('first of ten selected' , () => (
        <Pagination
            numberOfPages={ text('numberOfPages', '10') }
            currentPage={ text('currentPage', '1') }
            onChangePage={action('clicked')}
        />
    ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('TestComponent', module)
    .add('defeult', () => (
        <TestComponent
            label="Click!"
        />
    ));
