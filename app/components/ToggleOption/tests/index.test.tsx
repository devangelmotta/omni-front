import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider, defineMessages } from 'react-intl';

import ToggleOption from '../index';

describe('<ToggleOption />', () => {
  it('should render default language messages', () => {
    const defaultEnMessage = 'someContent';
    const message = defineMessages({
      enMessage: {
        id: 'omni.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
    });
    const { container } = render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <IntlProvider locale="en">
        <ToggleOption value="en" message={message.enMessage} />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display `value`(two letter language code) when `message` is absent', () => {
    const { queryByText } = render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <IntlProvider locale="es">
        <ToggleOption value="es" />
      </IntlProvider>,
    );
    expect(queryByText('de')).toBeInTheDocument();
  });
});
