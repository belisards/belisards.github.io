/**
 * Hero Animation Corpus — Real text from Adriano Belisario's work
 *
 * This file feeds the hero canvas animation with authentic fragments
 * from publications, code, investigations, and research.
 * Edit freely — the hero pulls from these arrays at runtime.
 */

// ─── CODE FRAGMENTS ───────────────────────────────────────────
// Real imports, function calls, variable names from actual projects
export const CODE_FRAGMENTS = [
  `from transformers import BertTokenizer`,
  `model = AutoModelForSequenceClassification`,
  `pipe("zero-shot-classification")`,
  `df.groupby("municipality").count()`,
  `geopandas.read_file(camp_boundaries)`,
  `nlp = spacy.load("pt_core_news_lg")`,
  `G = nx.from_pandas_edgelist(edges)`,
  `betweenness_centrality(G)`,
  `tokenizer.encode(text, truncation=True)`,
  `labels = ["gun_violence", "not_gun_violence"]`,
  `streamlit.map(refugee_camps)`,
  `fine_tune(bertimbau, epochs=5)`,
  `embeddings = model.encode(corpus)`,
  `cosine_similarity(vec_a, vec_b)`,
  `pd.merge(left, right, on="cpf")`,
  `requests.get(diario_oficial_url)`,
  `soup.find_all("div", class_="decision")`,
  `gpd.sjoin(favelas, helicopter_paths)`,
  `nx.community.louvain_communities(G)`,
  `torch.nn.CrossEntropyLoss()`,
  `trainer.train()`,
  `predict(text_batch, threshold=0.85)`,
  `json.loads(whatsapp_export)`,
  `re.findall(r"\\b\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}\\b", doc)`,
  `BERT_MODEL = "neuralmind/bert-base-portuguese-cased"`,
  `confusion_matrix(y_true, y_pred)`,
  `shap.summary_plot(shap_values, X_test)`,
  `rasterio.open(satellite_image)`,
  `cv2.matchTemplate(frame, target)`,
];

// ─── PUBLICATION TITLES ───────────────────────────────────────
// Real titles from papers, books, investigations
export const PUBLICATION_FRAGMENTS = [
  `Into the crossfire`,
  `Evaluating the use of a language model`,
  `to crowdsource gun violence reports`,
  `Analyzing misinformation claims`,
  `2022 Brazilian General Election`,
  `WhatsApp, Twitter, and Kwai`,
  `Territories of Exception`,
  `Violation of rights`,
  `police helicopters in Rio de Janeiro`,
  `Expulsions — Forced displacements`,
  `archaeological destruction`,
  `mega-mining project Mirador`,
  `Ecuadorian Amazonia`,
  `Espectro e vigilância`,
  `Perspectivas Tecnoxamânicas`,
  `Cross-platform gendertrolling`,
  `Way beyond ChatGPT`,
  `open source language models`,
  `Anatomy of a visual investigation`,
  `Communication, surveillance and infrastructure`,
  `techno-politics of the electromagnetic spectrum`,
  `From Laughs to Courts`,
  `Multifaceted Uses of AI in the Global South`,
  `Community networks in Brazil`,
  `Brazão tentou beneficiar região`,
  `recompensa por morte de Marielle`,
  `A tropa de choque de Bolsonaro`,
  `As offshores dos empresários de ônibus`,
  `doações legais da Odebrecht`,
  `1.087 candidatos desde 2002`,
  `A teia dos donos do transporte no Rio`,
];

// ─── TECHNICAL KEYWORDS ──────────────────────────────────────
// Terms from across his practice
export const KEYWORDS = [
  `NLP`, `OSINT`, `BERT`, `transformer`, `tokenizer`,
  `classification`, `fine-tuning`, `embeddings`, `attention`,
  `gradient boosting`, `geodata`, `geolocation`, `network analysis`,
  `forced displacement`, `refugees`, `IDP`, `microdata`,
  `crowdsource`, `fact-check`, `misinformation`, `deepfake`,
  `forensic architecture`, `visual investigation`, `chronolocation`,
  `surveillance`, `human rights`, `gun violence`, `militia`,
  `open data`, `scraping`, `regex`, `data pipeline`,
  `social media`, `cross-platform`, `Hugging Face`, `PyTorch`,
  `BERTimbau`, `Congretimbau`, `Fogo Cruzado`, `Documental.xyz`,
  `data journalism`, `School of Data`, `Coda.Br`,
  `free spectrum`, `community networks`, `video activism`,
  `satellite imagery`, `spatial analysis`, `camp boundaries`,
  `text classification`, `zero-shot`, `inference`,
];

// ─── ENTITY NAMES ─────────────────────────────────────────────
// Real organizations, places, projects he's worked with
export const ENTITIES = [
  `Oxford Internet Institute`, `UNHCR`, `Bellingcat`,
  `Forensic Architecture`, `Agência Pública`, `The Intercept Brasil`,
  `Netlab/UFRJ`, `School of Data Brazil`, `Medialab/UFRJ`,
  `WITNESS`, `UNESCO`, `Open Knowledge Brazil`,
  `Joint Data Center`, `World Bank`, `Instituto Fogo Cruzado`,
  `Documental.xyz`, `Agência Autônoma`, `Columbia University`,
  `Rio de Janeiro`, `Bergen`, `Berlin`, `Geneva`, `São Paulo`,
  `Cartagena`, `Madrid`, `Mexico City`,
];

// ─── DATA VALUES ──────────────────────────────────────────────
// Numbers and metrics that appear in his work
export const DATA_VALUES = [
  `n=1,087`, `p<0.001`, `F1=0.89`, `AUC=0.94`,
  `epochs=5`, `lr=2e-5`, `batch=32`, `acc=0.91`,
  `precision=0.87`, `recall=0.92`, `loss=0.034`,
  `2002–2024`, `1934–2024`, `n_clusters=12`,
  `threshold=0.85`, `latency=23ms`, `tokens=512`,
  `-22.9068° S`, `-43.1729° W`, `alt=450m`,
  `23:47:12 UTC`, `frame=1847`, `bearing=217°`,
];
