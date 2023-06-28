# PersonalFinanceTracker_Keerthana_J

Personal Finance Tracker using MERN STACK with the help of Github Copilot

The project was built using MERN Stack( MongoDB, Express JS, React Js, Node js) using Github Copilot

Refer faster_coder_report.pdf for documentation

Team Members -> Keerthana J 
                Hayagreevan V
                Jerin B S
                Karan Balaji R S

AUTHENTICATION :

-> JWT AUTHENTICATION
-> JWT is sent as cookie
-> Validity 1 day

PORT : 2000

API ENDPOINTS :

[POST] /user/signup :
{
    "username": "",
    "password" : "",
    "name": "",
    "balance": <integer/double> <default: 0> 
}

[POST] /user/login :
{
    "username": "",
    "password": ""
}

[GET] /transaction/ :
<retrive all transaction of the logged in user>

[POST] /transaction/add :
{
    "amount": <integer/double>
    "description": "" <default: 'no description provided'>
    "mode": "" <"credit"/"debit">
}