export const flexbox = ({dir = "row",jc = "center", ai = "center",wr = "no-wrap"} = {}) =>`
    display: flex;
    flex-direction: ${dir};
    justify-content: ${jc};
    align-items: ${ai};
    flex-wrap: ${wr};
`;

// flexbox({ ai: "flex-end" });
