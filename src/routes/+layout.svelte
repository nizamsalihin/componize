<script>
	import Sidebar from "$lib/Sidebar.svelte";
    import MainContent from "$lib/MainContent.svelte";
	import CodeContent from "$lib/CodeContent.svelte";
</script>

<div class="layout">
    <Sidebar/>

    <!-- rendered goes element here -->
    <div class="layout__content">
        <div class="layout__content-item">
            <div class="layout__topbar">
                <img src="icons/expand.svg" alt="expand icon" class="icon">
            </div>
            <div class="layout__section">
                 <!-- YOU MAIN CONTENT GOES HERE -->
                 <MainContent />

                 <!-- YOU COMPONENT CODE GOES HERE -->
                 <CodeContent />

             </div>
        </div>
    </div>

    <!-- code goes here -->
</div>


<style lang="scss">
    .layout {
        color: var(--primary-color);
        display: grid;
        grid-template-columns: 250px 1fr;

        &__content {
            display: grid;
            grid-template-columns: 1fr;
            transition: grid-template-columns 0.2s ease-in;

            &-item:not(:last-child) {
                border-right: 1px solid var(--border-color);
            }
        }

        &__topbar {
            border-bottom: 1px solid var(--border-color);
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            overflow: scroll;
            padding: var(--space-content-sm);
        }

        &__section {
            padding: var(--space-content);
        }
    }

    .icon {
        height: 18px;
        cursor: pointer;
    }
</style>
