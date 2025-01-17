/**
 * IBM Confidential
 *
 * OCO Source Materials
 * Copyright IBM Corp.  2022
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U.S. Copyright Office.
 *
 */

import { memo } from 'react'
import {
  Header,
  HeaderGlobalAction,
  HeaderName,
  HeaderNavigation,
  HeaderGlobalBar,
  HeaderMenu,
  SkipToContent,
} from '@carbon/react'
import { Login } from '@carbon/react/icons'

import { AppConst } from '@/constants/app'
import useStore from '@/store/use-store'
import { LoginType } from '@/types/auth'

type AppHeaderProps = {
  user?: { name: string }
}

export const AppHeader = memo((_props: AppHeaderProps): React.ReactElement => {
  const { authData, authStatus, initiateAuth } = useStore((state) => state)

  const onLoginClick = async () => {
    const trackEvent = (await import('@/utils/analytics')).trackEvent
    trackEvent('Navigate UI', {
      type: 'LOGIN',
      action: 'Login button clicked',
    })
    initiateAuth(LoginType.IBM_W3ID, window.location.href)
  }

  // const onLogoutClick = () => {
  // };

  const renderMenuContent = (_data: { ariaLabel: string }) => <>{authData?.name}</>

  return (
    <Header aria-label="Next Starter">
      <SkipToContent />
      <HeaderName href={AppConst.HOME_PAGE_URL} prefix="Next">
        Starter
      </HeaderName>
      <HeaderGlobalBar>
        {authStatus === 'Success' ? (
          <HeaderNavigation aria-label="Next Starter">
            <HeaderMenu aria-label="User Email Address" menuLinkName="" renderMenuContent={renderMenuContent}>
              {/* <HeaderMenuItem>
              <label className="app-header__link">{userState.userData?.name}</label>
            </HeaderMenuItem>
            <HeaderMenuItem onClick={onLogoutClick}>
              <label className="app-header__link">Logout</label>
            </HeaderMenuItem> */}
            </HeaderMenu>
          </HeaderNavigation>
        ) : (
          <HeaderGlobalAction aria-label="Login" onClick={onLoginClick}>
            <Login size={20} />
          </HeaderGlobalAction>
        )}
      </HeaderGlobalBar>
    </Header>
  )
})

AppHeader.displayName = 'AppHeader'
