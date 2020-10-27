import {useDispatch, useSelector} from "react-redux";
import {setThemeStart} from "../redux/Theme/theme.actions";


export default function useTheme() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme_P.theme);

    const onThemeChange = () => {
        theme === "dark" ? dispatch(setThemeStart("light")) : dispatch(setThemeStart("dark"));
    }

    return {
        theme,
        onThemeChange,
    }
}
