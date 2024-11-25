export default `
// Keyframes
@keyframes fadeOutDown {
    0% {
        opacity: 1
    }

    to {
        opacity: 0;
        transform: translate3d(0,100%,0)
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translate3d(0,100%,0)
    }

    to {
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@keyframes fadeOutDown {
    0% {
        opacity: 1
    }

    to {
        opacity: 0;
        transform: translate3d(0,100%,0)
    }
}

// Variables
$font-regular: 'Inter', sans-serif;
$font-bold: 'Inter', sans-serif;
$color-black: #000000;
$alpha: 0.3;
$gray-dark: #333333;
$icon-cancel: url('../img/x.svg');

.modal {
    font: 16px/1.2 $font-regular;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba($color: black, $alpha: 0.3);
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeOut 0.15s;

    &--show {
        animation: fadeIn 0.3s;
    }

    &--show &__card {
        animation: fadeInUp 0.3s;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-cancel {
            background-image: $icon-cancel-path;
            height: 24px;
            width: 24px;
            background-size: cover;
            cursor: pointer;
        }
    }

    &__card {
        animation-duration: 0.3s;
        background-color: white;
        border-radius: 5px;
        padding: 30px;
        max-width: 450px;
        animation: fadeOutDown 0.15s;
    }

    &__footer {
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: space;

        & > * {
            flex: 1;
        }

        // center action button if only one
        & > *:only-child {
            margin: auto;
        }
    }

    &__title {
        font: 20px/1.2 $font-bold;
        color: $gray-dark;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
}`
