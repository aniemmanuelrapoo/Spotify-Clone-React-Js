export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    //REMOVE AFTER FINISHED DEVELOPING....
    // token: 'BQAw9P34Z69zUVn-cPfsVsAIZ_I6l3vo3gzLEsTca7kQH5FuCirVdOWZ_GbLg95ff51BWLyMIocL90PC09QyPSVkt-Zop3HmGKZQlHX2NObiC5DsZv3Ehr2jYeeNmkzMh6EHoJ1r2yInupFY6MS7MSZ4UplkSLUCpVRbnQS0_WYivEnJ'
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
    
        default:
            return state;
    }
}

export default reducer