import dash
from dash import html, dcc
import plotly.express as px
import pandas as pd

# Sample data
df = px.data.gapminder().query("year == 2007")

# Create figure
fig = px.scatter(df, x="gdpPercap", y="lifeExp",
                 size="pop", color="continent", hover_name="country",
                 log_x=True, size_max=60)

# Initialize Dash app
app = dash.Dash(__name__)

# Layout
app.layout = html.Div([
    html.H1("World Data Dashboard"),
    dcc.Graph(id="scatter-plot", figure=fig)
])

# Run app
if __name__ == "__main__":
    app.run(debug=True)  # <- dash 3+ uses app.run instead of run_server
