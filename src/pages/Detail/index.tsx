import { rootState } from '@/store'
import { getDetailDataAction, getHomeDataAction } from '@/store/actionCreators'
import { connect } from 'react-redux'
import React from 'react'

const Detail = () => {
    return (
        <div>
            Detail
        </div>
    )
}
const mapStateToProps = (state: rootState) => ({
    loading: state.loading,
    goods: state.good.goods
})
const mapDispatchToProps = (dispatch: any) => ({
    getDetailDataActionDispatch() {
        dispatch(getHomeDataAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)