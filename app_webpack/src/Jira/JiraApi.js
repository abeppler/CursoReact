import JiraConnection from './JiraConnection'

export const getBoards = () => JiraConnection('anderson.beppler', 'm1nh4s3nh4').get('/rest/agile/1.0/board?startAt=0')