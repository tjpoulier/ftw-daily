import React from 'react';
import { renderShallow } from '../../util/test-helpers';
import { fakeIntl } from '../../util/test-data';
import { AuthenticationPageComponent } from './AuthenticationPage';

const noop = () => null;

describe('AuthenticationPageComponent', () => {
  it('matches snapshot when social logins are not shown', () => {
    const props = {
      history: { push: noop },
      location: { state: { from: '/protected' } },
      tab: 'login',
      isAuthenticated: false,
      authInProgress: false,
      scrollingDisabled: false,
      currentUserHasListings: false,
      onLogout: noop,
      onManageDisableScrolling: noop,
      submitLogin: noop,
      submitSignup: noop,
      intl: fakeIntl,
      sendVerificationEmailInProgress: false,
      onResendVerificationEmail: noop,
      showSocialLoginsForTests: false,
    };
    const tree = renderShallow(<AuthenticationPageComponent {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when social logins are shown', () => {
    const props = {
      history: { push: noop },
      location: { state: { from: '/protected' } },
      tab: 'login',
      isAuthenticated: false,
      authInProgress: false,
      scrollingDisabled: false,
      currentUserHasListings: false,
      onLogout: noop,
      onManageDisableScrolling: noop,
      submitLogin: noop,
      submitSignup: noop,
      intl: fakeIntl,
      sendVerificationEmailInProgress: false,
      onResendVerificationEmail: noop,
      showSocialLoginsForTests: true,
    };
    const tree = renderShallow(<AuthenticationPageComponent {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
