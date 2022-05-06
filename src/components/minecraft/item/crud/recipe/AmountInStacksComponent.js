import {Tag} from "@chakra-ui/react";
import AmountToAmountInStacksTransformer
    from "../../../../../services/minecraft/item/transformer/AmountToAmountInStacksTransformer";

export default function AmountInStacksComponent(props) {
    const amount = props.amount;

    const amountInStacks = AmountToAmountInStacksTransformer.transform(amount);

    if (amountInStacks) {
        return (
            <Tag colorScheme='green'>{amountInStacks}</Tag>
        );
    }
}
