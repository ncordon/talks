all: clean site

clean:
	rm -r docs || echo "docs folder not found"

site:
	reveal-md git.md --css css/custom.css --scripts "mermaid-min.js,reveal-mermaid.js" --static docs && \
	mv docs/_assets docs/assets && \
	sed -i '~' 's/_assets/assets/g' docs/git.html
