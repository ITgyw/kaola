import { rootState } from '@/store'
import { getDetailDataAction } from '@/store/actionCreators'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import Banners from './Banners'
import Tab from './Tab'
import { useLocation } from 'react-router'
import Header from './Header'
// import { log } from 'console'


const Detail: React.FC<any> = (props) => {
    const { pathname } = useLocation()
    let pathRes = pathname.split('/')[2]
    const {
        loading,
        details
    } = props
    const {
        getDetailDataActionDispatch
    } = props
    useEffect(() => {
        getDetailDataActionDispatch(pathRes)
        // console.log(details);
    }, [])

    console.log(pathRes)
    console.log(details);

    return (
        <div>
            <Header />
            <Banners details={details} />
            <Tab />
        </div>
    )


}


const mapStateToProps = (state: rootState) => ({
    loading: state.loading,
    details: state.detail.details
})
const mapDispatchToProps = (dispatch: any) => ({
    getDetailDataActionDispatch(id: number) {
        dispatch(getDetailDataAction(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)