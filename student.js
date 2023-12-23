import experess from 'express'
const router = experess.Router()


router.get('*',(request,response)=>{
    response.send('student root path working')
})

export default router
