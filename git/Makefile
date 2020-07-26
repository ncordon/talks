all: clean site

clean:
	rm -r docs || echo "docs folder not found"

site:
	reveal-md slides.md --css css/custom.css --static docs && mv docs/_assets docs/assets && sed -i '~' 's/_assets/assets/g' docs/slides.html
