import Axios from 'axios'
import * as utils from './../Util/utils'


const JiraConnection = (jiraUsername, jiraPassword) => {

    const instance = Axios.create({
        baseURL : 'http://jira.hbsis.com.br',
        timeout: 100000,  

    })

    var config = {
      headers: {
        // authorization: {
        //   basic: 'Basic YW5kZXJzb24uYmVwcGxlcjptMW5oNHMzbmg0',
        // }

        'authorization':'Basic YW5kZXJzb24uYmVwcGxlcjptMW5oNHMzbmg0'
      }
    };

    return {
      get: (url) => instance.get(url),
      post: (url, data) => instance.post(url, data)
    }

}

export default JiraConnection