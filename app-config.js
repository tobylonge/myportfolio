let backendHost

const hostname = window && window.location && window.location.hostname

if (["findtobi.netlify.app"].includes(hostname)) {
  backendHost = "https://app-send-mail-api.herokuapp.com/"
} else {
  backendHost = "https://app-send-mail-api.herokuapp.com/"
}

export const host_url = `${backendHost}api/`
