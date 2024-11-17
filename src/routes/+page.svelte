<div class="layout">
    <div class="sidebar">
        <div class="sidebar__logo">COMPONIZE</div>
        <div class="sidebar__links">

            <a href="/" class="sidebar__link">GETTING STARTED</a>
            <a href="/" class="sidebar__link">CARD</a>

            <!-- since inputexpandable will trigger next sibling of expadable, we add wrapper to prevent it -->
            <div>
                <input type="checkbox" id="menu-1" hidden>
                <label for="menu-1" class="sidebar__label">
                    <span>BUTTON</span>
                </label>
                <div class="expandable">
                    <div class="sidebar__links">
                        <a href="/" class="sidebar__link">BASIC</a>
                        <a href="/" class="sidebar__link">BUTTON ICON</a>
                    </div>
                </div>
            </div>

            <div>
                <input type="checkbox" id="menu-2" hidden>
                <label for="menu-2" class="sidebar__label">
                    <span>OTHER</span>
                </label>
                <div class="expandable">
                    <div class="sidebar__links">
                        <a href="/" class="sidebar__link">BASIC</a>
                        <a href="/" class="sidebar__link">BUTTON ICON</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


<style lang="scss">
    .layout {
        color: var(--primary-color);
        display: grid;
        grid-template-columns: 300px 1fr;
    }

    .sidebar {
        height: calc(100vh - 2 * var(--space-content));
        border-right: 1px solid var(--border-color);
        padding: var(--space-content);
        overflow: scroll;

        &__link,
        &__label {
            padding: var(--space-content-sm);
            cursor: pointer;
        }

        &__logo {
            font-size: 18px;
            font-weight: 500;
            padding: 20px 14px;
        }

        &__links {
            display: flex;
            flex-direction: column;
            gap: 3px;

            & & {
                margin-left: 20px;
                padding-left: var(--space-content-sm);
                position: relative;
                border-left: 1px solid;
            }
        }

        &__link {
            color: var(--black-color);
            text-decoration: none;
            width: 100%;
            border-radius: var(--rounded);
            cursor: pointer;

            &:hover {
                background-color: var(--border-color-70);
            }
        }

        &__label {
            position: relative;
            display: flex;
            gap: 5px;
            align-items: center;
            justify-content: space-between;
            color: var(--black-color);

            &::after {
                content: "";
                display: block;
                box-sizing: border-box;
                width: 10px;
                height: 10px;
                border-bottom: 2px solid;
                border-right: 2px solid;
                transform: rotate(45deg);
                transition: transform 0.1s ease;
                position: relative;
                top: -2px;
            }

            input:checked + &::after {
                transform: rotate(225deg);
            }
        }

    }

    .expandable {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.2s ease;
        overflow: hidden;

        & > * {
            overflow: hidden;
        }

        input:checked ~ & {
            grid-template-rows: 1fr;
        }
    }

    .icon-chevron-down {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: 1;
        width: 22px;
        height: 22px;
        border: 2px solid transparent;
        border-radius: 100px;

        &::after {
            content: "";
            display: block;
            box-sizing: border-box;
            position: absolute;
            width: 10px;
            height: 10px;
            border-bottom: 2px solid;
            border-right: 2px solid;
            transform: rotate(45deg);
            left: 4px;
            top: 2px;
        }
    }

</style>
