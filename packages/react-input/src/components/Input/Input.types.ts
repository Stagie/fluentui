import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type InputSlots = {
  /**
   * Wrapper element which visually appears to be the input and is used for borders, focus styling, etc.
   * (A wrapper is needed to properly position `contentBefore` and `contentAfter` relative to `input`.)
   */
  root: IntrinsicShorthandProps<'span'>;

  /**
   * The actual `<input>` element. `type="text"` will be automatically applied unless overridden.
   * This is the "primary" slot, so top-level native props (except `className` and `style`) and the
   * top-level `ref` will go here.
   */
  input: Omit<IntrinsicShorthandProps<'input'>, 'size'>;

  /** Element before the input text, within the input border */
  contentBefore?: IntrinsicShorthandProps<'span'>;

  /** Element after the input text, within the input border */
  contentAfter?: IntrinsicShorthandProps<'span'>;
};

export type InputCommons = {
  /**
   * Size of the input (changes the font size and spacing).
   * @default 'medium'
   */
  // This name overlaps with the native `size` prop, but that prop isn't very useful in practice
  // (we could add `htmlSize` for the native functionality if someone needs it)
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size
  size?: 'small' | 'medium' | 'large';

  /**
   * If true, the field will have inline display, allowing it be used within text content.
   * If false (the default), the field will have block display.
   */
  inline?: boolean;

  /**
   * Controls the colors and borders of the field.
   * @default 'outline'
   */
  appearance?: 'outline' | 'underline' | 'filledDarker' | 'filledLighter';
};

/**
 * Input Props
 */
export type InputProps = InputCommons & Omit<ComponentProps<InputSlots>, 'children'>;

/**
 * State used in rendering Input
 */
export type InputState = InputCommons & ComponentState<InputSlots>;
