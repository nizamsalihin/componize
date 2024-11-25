<script>
	import CodeViewer from './CodeViewer.svelte';
    import htmlCode from '$lib/codes/modal/element';
    import jsCode from '$lib/codes/modal/script';
    import cssCode from '$lib/codes/modal/style';

</script>

<div class="wrapper">
    <CodeViewer language="html" code={htmlCode} />
    <CodeViewer language="javascript" code={jsCode} />
    <CodeViewer language="css" code={cssCode} />
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--space-content-sm);
    }
</style>
