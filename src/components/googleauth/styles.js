import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    gbutton: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        padding: "5px 10px",
        borderRadius: "4px",
        borderColor: "transparent",
        backgroundColor: "white",
        position: "relative"
    },
    gbuttonText: {
        color: "#999999",
        fontWeight: "bolder"
    },
    gicon: {
        height: "20px",
        width: "20px",
        marginRight: "5px"
    }
}));

export { useStyles };