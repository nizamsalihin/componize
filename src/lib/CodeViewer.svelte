<script lang="ts">
	import Prism from 'prismjs';
	let { language, code, className = ""} = $props();

	const codeHTML = Prism.highlight(code, Prism.languages[language], language);

	let copyCode = () => {
		navigator.clipboard.writeText(code)
		alert('code copied')
	};
</script>

<div class="code-viewer {className}">
	<div class="code-viewer__header">
		<div class="code-viewer__header-label">{language.toUpperCase()}</div>
		<button class="code-viewer__header-icon" onclick="{copyCode}">
			<img src="icons/copy.svg" alt="icon copy" />
			<span>copy</span>
		</button>
	</div>
	<pre class="line-numbers code-viewer__code">
          <code class="language-{language}">{@html codeHTML}</code>
      </pre>
</div>

<style lang="scss">
	.code-viewer {
		margin: 0;
		border-radius: var(--rounded);
		position: relative;

		&__header {
			padding: var(--space-content-sm) var(--space-content);
			font-size: 12px;
			background-color: rgb(40, 44, 52);
			color: white;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 10px;
			border-top-left-radius: var(--rounded);
			border-top-right-radius: var(--rounded);

			&-icon {
				display: flex;
				align-items: center;
				gap: 5px;
				padding: 4px 8px;
				outline: 0;
				background-color: transparent;
				border: 0;
				color: white;

				& > img {
					height: 15px;
					display: block;
				}

				&:hover {
					background-color: rgba($color: white, $alpha: 0.2);
					border-radius: var(--rounded);
					cursor: pointer;
				}
			}
		}

		&__code {
			margin: 0;
			border-top: 1px solid var(--border-color);
			border-bottom-left-radius: var(--rounded);
			border-bottom-right-radius: var(--rounded);
		}
	}
</style>
