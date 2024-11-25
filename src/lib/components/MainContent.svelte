<script>
	import CodeViewer from '$lib/components/CodeViewer.svelte';
    import htmlCode from '$lib/codes/modal/element';
    import jsCode from '$lib/codes/modal/script';
    import cssCode from '$lib/codes/modal/style';

</script>
<!-- MAIN CONTENT AND HOW TO USE IT -->

<!-- CODE TO COPY -->
<div class="wrapper">
    <!-- <CodeViewer language="html" code={htmlCode} label="How To Use"/> -->
    <CodeViewer language="javascript" code={jsCode} />
    <CodeViewer language="css" code={cssCode} label={'scss'}/>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--space-content-sm);
    }
</style>
