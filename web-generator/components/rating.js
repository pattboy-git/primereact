const RatingProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'number',
        default: 'null',
        description: 'Value of the rating.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
    },
    {
        name: 'readOnly',
        type: 'boolean',
        default: 'false',
        description: 'When present, changing the value is not possible.'
    },
    {
        name: 'stars',
        type: 'number',
        default: '5',
        description: 'Number of stars.'
    },
    {
        name: 'cancel',
        type: 'boolean',
        default: 'true',
        description: 'When specified a cancel icon is displayed to allow removing the value.'
    },
    {
        name: 'style',
        type: 'object',
        default: 'null',
        description: 'Inline style of the component.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'ClassName of the component.'
    },
    {
        name: 'tooltip',
        type: 'any',
        default: 'null',
        description: 'Content of the tooltip.'
    },
    {
        name: 'tooltipOptions',
        type: 'object',
        default: 'null',
        description: 'Configuration of the tooltip, refer to the tooltip documentation for more information.'
    }
];

const RatingEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke on value change.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'selected value'
            }
        ]
    }
];

const RatingStyles = [
    { name: 'p-rating', description: 'Container element' },
    { name: 'p-rating-star', description: 'Star element' },
    { name: 'p-rating-star-on', description: 'Selected star element.' },
    { name: 'p-rating-cancel', description: 'Cancel icon.' }
];

module.exports = {
    rating: {
        name: 'Rating',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/rating',
        props: RatingProps,
        events: RatingEvents,
        styles: RatingStyles
    }
};
