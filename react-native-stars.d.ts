declare module 'react-native-stars' {
    import React from 'react';
    import { StyleProp, ViewStyle } from 'react-native';

    interface StarsProps {
        default?: number;
        count?: number;
        half?: boolean;
        starSize?: number;
        fullStar?: React.ReactNode;
        emptyStar?: React.ReactNode;
        halfStar?: React.ReactNode;
        update?(val: number): void;
        disabled?: boolean;
        spacing?: number;
        backingColor?: string;
        containerStyle?: StyleProp<ViewStyle>;
    }

    const Stars: React.FC<StarsProps>;

    export default Stars;
}
