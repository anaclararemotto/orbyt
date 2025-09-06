import { Colors } from "@/theme/colors";
import { typography } from "@/theme/typography";

export const useLoginStyle = (colors: Colors) => ({
    container: {
        gap: 5,
    },
    label: {
        ...typography.body2,
        color: colors.textColor,
    },
    inputContainer:{
        boxSizing: 'border-box',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.border,
        justifyContent: 'space-between',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    input: {
        ...typography.body2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})