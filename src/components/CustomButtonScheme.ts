export default {
  type: 'input',
  props: ['buttonType', 'variant', 'size'],
  schema: [
    {
      $el: 'div',
      attrs: {
        'data-type': 'button',
        class: generateClass('$variant')
      },
      children: [
        {
          $el: 'button',
          attrs: {
            type: 'button',
            class: {
              '$classes.main': true,
              if: '$variant === primary',
              then: '$classes.primary',
              else: {
                if: '$variant === secondary',
                then: '$classes.secondary',
                else: {
                  if: '$variant === critical',
                  then: '$classes.critical'
                }
              }
            }
          },
          children: '$slots.default'
        }
      ]
    }
  ]
};

function generateClass(variant: any) {
  console.log('variant', variant);
  return ''
}