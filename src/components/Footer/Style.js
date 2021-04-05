import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles({
    icons: {
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        padding: "0"
    },
    icons_a: {
        color: "white"
    },
    footer: {
        backgroundColor: "#3aafa9",
        color: "white"
    },
    footer__links: {
        listStyle: "none",
        display: "flex",
        padding: "0",
        justifyContent: "center"
    },
    link: {
        color: "white",
        textDecoration: "none"
    },
    footer__links_li: {
        margin: "10px"
    },
    logo: {
        textAlign: "center"
    },
    icon: {
        padding: "0 10px"
    },
    iconsrow: {
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center"
    }
})

export default useStyles
