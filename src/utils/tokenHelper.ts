
const PREFIX_KEY_RESPONSE = 'userinfo'

export const tokenHelper = {
  getTokenDetails: (): any => {
    return JSON.parse(localStorage.getItem(PREFIX_KEY_RESPONSE)!)!;
  },

  getAccessToken: () => {
    let accessToken = '';
    if (tokenHelper.getTokenDetails()?.access_token!) {
      accessToken = tokenHelper.getTokenDetails().access_token;
    }
    return accessToken;
  },
  clearToken: () => {
    localStorage.removeItem(PREFIX_KEY_RESPONSE);
  },

  setAccessToken: (value: any) => {
    const val = { ...value };
    val['expires_at'] = new Date().getTime();
    localStorage.setItem(PREFIX_KEY_RESPONSE, JSON.stringify(val));
  },

  setStateParamsLogin: (value: string) => {
    localStorage.setItem('state', value);
  },
};
