import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "react";
import { getHomeDataAction } from "@/store/actionCreators";
// import { GoodsType } from "@/models/GoodsType";
import { rootState } from "@/store";

interface HomeProps {
    loading: boolean;
    goods: any[];
    getHomeDataActionDispatch: () => void;
}
const Home: React.FC<HomeProps> = (props) => {
    const {
        loading,
        goods
    } = props
    const {
        getHomeDataActionDispatch
    } = props
    useEffect(() => {
        getHomeDataActionDispatch()
        console.log('/////////');
        console.log(goods);


    }, [])
    return (
        <div>hkome</div>
    )

}
const mapStateToProps = (state: rootState) => ({
    loading: state.loading,
    goods: state.goods
})

const mapDispatchToProps = (dispatch: any) => ({
    getHomeDataActionDispatch() {
        dispatch(getHomeDataAction())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)